import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Score from "./components/Score";
import { calculateWinner } from "./utils";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner !== null) {
      setTimeout(() => {
        alert("Gano el sapo" + winner);
        setGameOver(true);
      }, "200");
    }
  }, [JSON.stringify(squares)]);

  const changeTurno = () => {
    if (turno === 1) {
      setTurno(2);
    } else {
      setTurno(1);
    }
  };

  const restart = () => {
    setSquares(Array(9).fill(null));
    setGameOver(false);
    setTurno(1);
  };

  return (
    <div className="App">
      <Score turno={turno} />
      <Board
        changeTurno={changeTurno}
        squares={squares}
        turno={turno}
        gameOver={gameOver}
      />
      <button onClick={restart}>Reiniciar</button>
    </div>
  );
};

export default App;
