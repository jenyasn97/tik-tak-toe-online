import { useState } from "react";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";
import GameSymol from "../components/game/GameSymol";
import UiModal from "../components/uikit/UiModal";
import UIButton from "../components/uikit/UIButton";

function HomePage() {
  const [playersCount] = useState(2);
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequance,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <main className="pt-6 mx-auto w-max">
          <GameTitle playersCount={playersCount} />
          <GameInfo
            playersCount={playersCount}
            className="mt-4"
            currentMove={currentMove}
            isWinner={!!winnerSymbol}
            onPlayerTimeOver={handlePlayerTimeOver}
          />
          {winnerSymbol && (
            <div className="my-4">
              <GameSymol symbol={winnerSymbol} />
            </div>
          )}
          <UiModal
            isOpen={winnerSymbol}
            onClose={() => {
              console.log("click");
            }}
          >
            <UiModal.Header className="">Игра завершена!</UiModal.Header>
            <UiModal.Body>
              <div className="text-sm">
                Победитель: <span className="text-teal-600">Sultan</span>
              </div>
            </UiModal.Body>
            <UiModal.Footer>
              <UIButton size="md" variant="outline">
                Вернуться
              </UIButton>
              <UIButton size="md" variant="primary">
                Играть снова
              </UIButton>
            </UiModal.Footer>
          </UiModal>
          <GameField
            className="mt-6"
            cells={cells}
            currentMove={currentMove}
            nextMove={nextMove}
            handleCellClick={handleCellClick}
            winnerSequance={winnerSequance}
            winnerSymbol={winnerSymbol}
          />
        </main>
      </div>
    </>
  );
}

export default HomePage;
