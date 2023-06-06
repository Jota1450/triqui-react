import { useEffect, useState } from "react";
import { calculateWinner } from "./utils";
import Board from "./components/Board";
import Score from "./components/Score";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner !== null) {
      setTimeout(() => {
        const winnerText = winner === "O" ? "#1" : "#2";
        alert("Gano el jugador " + winnerText);
        setGameOver(true);
        restart();
      }, "200");
    }
  }, [JSON.stringify(squares)]);

  function changeTurno() {
    if (turno === 1) {
      setTurno(2);
    } else {
      setTurno(1);
    }
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setGameOver(false);
    setTurno(1);
  }

  return (
    <div className="App center">
      <Score turno={turno} />
      <Board
        changeTurno={changeTurno}
        squares={squares}
        turno={turno}
        gameOver={gameOver}
      />
      <br />
      <button onClick={restart}>Reiniciar</button>
    </div>
  );
};

export default App;
