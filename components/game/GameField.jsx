import clsx from "clsx";
import ZeroIcon from "./icons/ZeroIcon";
import CrossIcon from "./icons/CrossIcon";
import UiButton from "../uikit/UIButton";

const celis = new Array(19 * 19).fill(null);

function GameField({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl leading-tight">
            Ход: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
            Следующий: <CrossIcon />
          </div>
        </div>

        <UiButton variant="primary" size="md">
          Ничья
        </UiButton>
        <UiButton variant="outline" size="md">
          Сдаться
        </UiButton>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {celis.map((_, i) => {
          return (
            <button
              key={i}
              className="border -ml-px -mb-px border-slate-200  flex items-center justify-center"
            >
              <ZeroIcon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default GameField;
