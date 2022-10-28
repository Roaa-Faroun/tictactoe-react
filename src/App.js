import "./App.css";
import Score from "./components/score/score.component";
import GameBoard from "./components/gameboard/gameboard.component";
import { useState } from "react";

function App() {
  let previousInfo = JSON.parse(localStorage.getItem("gameStatus")) || "";
  const winnersCells = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  const [pieces, setPieces] = useState(Array(9).fill(""));
  let [piece, setPiece] = useState(previousInfo.piece || "X");
  const [showRes, setShowRes] = useState("");
  const [scores, setScores] = useState(
    previousInfo.scores || { oScore: 0, xScore: 0 }
  );
  const setter = () => {
    localStorage.setItem(
      "gameStatus",
      JSON.stringify({ scores: scores, piece: piece })
    );
    setPieces(Array(9).fill(""));
    setShowRes("");
  };

  const checkScore = (manageArr) => {
    localStorage.setItem(
      "gameStatus",
      JSON.stringify({ scores: scores, piece: piece })
    );
    for (let i = 0; i < winnersCells.length; i++) {
      if (
        manageArr[winnersCells[i][0]] !== "" &&
        manageArr[winnersCells[i][0]] === manageArr[winnersCells[i][1]] &&
        manageArr[winnersCells[i][1]] === manageArr[winnersCells[i][2]]
      ) {
        if (piece === "X") {
          setScores({ ...scores, xScore: scores.xScore + 1 });
        } else {
          setScores({ ...scores, oScore: scores.oScore + 1 });
        }

        setShowRes(`The Winner Is : ${piece}`);
        return;
      }
    }

    if (!manageArr.includes("")) {
      console.log("draw");
      setShowRes("Draw");
      return;
    }
    localStorage.setItem(
      "gameStatus",
      JSON.stringify({ scores: scores, piece: piece })
    );
    return;
  };
  const update = (index) => {
    if (pieces[index] === "") {
      const manageArr = [...pieces];
      manageArr[index] = piece;
      setPieces(manageArr);
      const turn = piece === "X" ? "O" : "X";
      setPiece(turn);

      checkScore(manageArr);
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe Game</h1>
      </header>
      <Score scores={scores} piece={piece} />
      <GameBoard
        showRes={showRes}
        setter={setter}
        setPieces={setPieces}
        pieces={pieces}
        update={update}
      />
    </div>
  );
}

export default App;
