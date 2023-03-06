import Symbol from "./Symbol";

function Board({ changeTurno, squares, turno, gameOver }) {
  const handleClick = (index) => {
    if (!gameOver && !squares[index]) {
      squares[index] = turno === 1 ? "X" : "O";
      changeTurno();
    }
  };

  return (
    <div className="board">
      {squares.map((square, index) => {
        return (
          <div
            key={`square_${index}`}
            className="square"
            onClick={() => handleClick(index)}
          >
            <Symbol symbol={square} />
          </div>
        );
      })}
    </div>
  );
}

export default Board;
