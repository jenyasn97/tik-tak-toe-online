function ResetButton({ onClick }) {
  return (
    <button className="mt-3 bg-transparent border border-gray-400 py-1 px-3 rounded cursor-pointer" onClick={onClick}>
      Сбросить
    </button>
  );
}

export default ResetButton;
