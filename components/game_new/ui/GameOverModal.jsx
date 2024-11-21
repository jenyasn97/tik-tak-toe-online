import React from "react";
import UiModal from "../../uikit/UiModal";
import UIButton from "../../uikit/UIButton";

function GameOverModal({ winnerName, players }) {
  return (
    <UiModal
      width="md"
      isOpen={winnerName}
      onClose={() => {
        console.log("click");
      }}
    >
      <UiModal.Header className="">Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="justify-between grid grid-cols-2 gap-3 mt-2">{players}</div>
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
  );
}

export default GameOverModal;
