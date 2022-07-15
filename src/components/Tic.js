import React, { useState , useEffect} from "react";
import GamePlay from "./GamePlay";
import "./tic.css";

const Tic = () => {
  const [Tic, setTic] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  const [OChance, setOChance] = useState(false);

  const handleClicked = (e) => {
    let value = Array.from(Tic);
    value[e] = OChance ? "0" : "X";
    setTic(value);
    setOChance(!OChance);
  };

  useEffect(() => {
    const gameResult = WinnerResult();
    if (gameResult) {
      <h4 class="alert-heading"></h4>
      alert(`Winner is ${gameResult}`)
    }
  
  }, [Tic])
  const WinnerResult = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (Tic[a] && Tic[a] === Tic[b] && Tic[a] === Tic[c]) {
            return Tic[a];
        }
    }
    return null;
}

  return (
    <>
      <div className="container" id="main">
        <span id="turn">Tic Tac Toe</span>

        <div
          className="box"
          style={{ borderLeft: 0, borderTop: 0 }}
          id="box1"
          state={Tic[0]}
          onClick={() => handleClicked(0)}
        >
          <GamePlay state={Tic[0]} onClick={() => handleClicked(0)} />
        </div>

        <div
          className="box"
          style={{ borderTop: 0 }}
          id="box2"
          state={Tic[1]}
          onClick={() => handleClicked(1)}
        >
          <GamePlay state={Tic[1]} onClick={() => handleClicked(1)} />
        </div>

        <div
          className="box"
          style={{ borderTop: 0, borderRight: 0 }}
          id="box3"
          state={Tic[2]}
          onClick={() => handleClicked(2)}
        >
          <GamePlay state={Tic[2]} onClick={() => handleClicked(2)} />
        </div>

        <div
          className="box"
          style={{ borderLeft: 0 }}
          id="box4"
          state={Tic[3]}
          onClick={() => handleClicked(3)}
        >
          <GamePlay state={Tic[3]} onClick={() => handleClicked(3)} />
        </div>

        <div
          className="box"
          id="box5"
          state={Tic[4]}
          onClick={() => handleClicked(4)}
        >
          <GamePlay state={Tic[4]} onClick={() => handleClicked(4)} />
        </div>

        <div
          className="box"
          style={{ borderRight: 0 }}
          id="box6"
          state={Tic[5]}
          onClick={() => handleClicked(5)}
        >
          <GamePlay state={Tic[5]} onClick={() => handleClicked(5)} />
          {console.log("5")}
        </div>
        <div
          className="box"
          style={{ borderLeft: 0, borderBottom: 0 }}
          id="box7"
          state={Tic[6]}
          onClick={() => handleClicked(6)}
        >
          <GamePlay state={Tic[6]} onClick={() => handleClicked(6)} />
          {console.log("6")}
        </div>

        <div
          className="box"
          style={{ borderBottom: 0 }}
          id="box8"
          state={Tic[7]}
          onClick={() => handleClicked(7)}
        >
          <GamePlay state={Tic[7]} onClick={() => handleClicked(7)} />
        </div>
        <div
          className="box"
          style={{ borderRight: 0, borderBottom: 0 }}
          id="box9"
          state={Tic[8]}
          onClick={() => handleClicked(8)}
        >
          <GamePlay state={Tic[8]} onClick={() => handleClicked(8)} />
        </div>
      </div>

      <button
        className="btn"
        id="replay"
        onClick={() =>
          setTic([
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
          ])
        }
      >
        Reset Game
      </button>
    </>
  );
};

export default Tic;
