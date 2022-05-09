import React, { useState, useEffect } from "react";
import ticTackStyle from "./TicTac.module.scss";

const TicTac = () => {
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [winner, setWinner] = useState(false);
  const [winningCombinationArray, setWinningCombinationArray] = useState([]);

  const currentValue = React.useRef("O");

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const IsPlayerWon = (item) => currentPlayer[item] === currentValue.current;
  const highLightCells = (winningCombination) => {
    for (let item of winningCombination) {
      document.getElementById(item).classList.toggle(ticTackStyle.highlights);
    }
    setWinner(true);
  };

  const removeHighLightCells = (winningCombination) => {
    for (let item of winningCombination) {
      document.getElementById(item).classList.remove(ticTackStyle.highlights);
    }
  };

  const checkForWinner = () => {
    winningCombination.forEach((combination) => {
      let check = combination.every(IsPlayerWon);
      if (check) {
        highLightCells(combination);
        setWinningCombinationArray(combination);
      }
    });
  };

  const retryGame = () => {
    setCurrentPlayer({});
    setWinner(false);
    currentValue.current = "O";
    removeHighLightCells(winningCombinationArray);
  };

  const handleClickCell = (e) => {
    if (currentPlayer[Number(e.target.id)]) return;
    if (winner) return;
    currentValue.current === "X"
      ? (currentValue.current = "O")
      : (currentValue.current = "X");
    setCurrentPlayer((prev) => ({
      ...prev,
      [Number(e.target.id)]: currentValue.current,
    }));
  };

  useEffect(() => {
    checkForWinner();
  }, [currentValue.current]);

  return (
    <div className={ticTackStyle.ticTac}>
      <h1>Welcome to tic tac game</h1>
      <div className={ticTackStyle.board} onClick={handleClickCell}>
        <div className={ticTackStyle.cell} id="0">
          {currentPlayer[0]}
        </div>
        <div className={ticTackStyle.cell} id="1">
          {currentPlayer[1]}
        </div>
        <div className={ticTackStyle.cell} id="2">
          {currentPlayer[2]}
        </div>
        <div className={ticTackStyle.cell} id="3">
          {currentPlayer[3]}
        </div>
        <div className={ticTackStyle.cell} id="4">
          {currentPlayer[4]}
        </div>
        <div className={ticTackStyle.cell} id="5">
          {currentPlayer[5]}
        </div>
        <div className={ticTackStyle.cell} id="6">
          {currentPlayer[6]}
        </div>
        <div className={ticTackStyle.cell} id="7">
          {currentPlayer[7]}
        </div>
        <div className={ticTackStyle.cell} id="8">
          {currentPlayer[8]}
        </div>
      </div>
      <h1 className={winner ? ticTackStyle.winnerOn : ticTackStyle.winnerOff}>
        Winner is {currentValue.current}
      </h1>

      <button onClick={retryGame}>Retry</button>
    </div>
  );
};

export default TicTac;
