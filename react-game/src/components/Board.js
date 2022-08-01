import React from "react";
import { useState } from "react";

import Cell from "./Cell";
import "./style.css";

const Board = () => {
  const BOARD_SIZE = 9;
  const EMPTY_BOARD = ["", "", "", "", "", "", "", "", ""];
  const WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [currentMove, setCurrentMove] = useState("X");
  const [emptyCellsNumber, setEmptyCellsNumber] = useState(BOARD_SIZE - 1);
  const [cell, setCell] = useState(EMPTY_BOARD);
  const [winMessage, setWinMessage] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  const checkForWinner = (squares) => {
    WINNING_CONDITIONS.forEach((pattern) => {
      if (
        squares[pattern[0]] &&
        squares[pattern[1]] &&
        squares[pattern[2]] &&
        squares[pattern[0]] === squares[pattern[1]] &&
        squares[pattern[1]] === squares[pattern[2]]
      ) {
        setWinMessage(squares[pattern[0]]);
        setIsDisabled(true);
      }
    });

    if (emptyCellsNumber === 0) {
      setWinMessage("Nobody");
      setIsDisabled(true);
    }
  };

  const handleClick = (index) => {
    if (cell[index]) {
      return;
    }

    if (currentMove === "X") {
      cell[index] = "X";
      setEmptyCellsNumber(emptyCellsNumber - 1);
      setCurrentMove("O");
    } else {
      cell[index] = "O";
      setEmptyCellsNumber(emptyCellsNumber - 1);
      setCurrentMove("X");
    }

    checkForWinner(cell);
  };

  const clearCells = () => {
    setWinMessage(null);
    setCurrentMove("X");
    setEmptyCellsNumber(BOARD_SIZE - 1);
    setCell(EMPTY_BOARD);
  };

  const handleRestart = () => {
    setIsDisabled(false);
    clearCells();
  };

  const cellRow = (startIndex, stopIndex) => {
    let cells = [];

    for (let index = startIndex; index < stopIndex; ++index) {
      cells.push(
        <Cell
          cell={cell}
          position={index}
          onClick={() => handleClick(index)}
          disabled={isDisabled}
        />
      );
    }

    return cells;
  };

  return (
    <>
      <div className="boardContainer">
        <table>
          Move: {currentMove}
          <tbody>
            <tr>{cellRow(0, 3)}</tr>
            <tr>{cellRow(3, 6)}</tr>
            <tr>{cellRow(6, BOARD_SIZE)}</tr>
          </tbody>
        </table>
      </div>
      {winMessage && (
        <div>
          <p>{winMessage} is the winner!</p>
          <button onClick={() => handleRestart()}> Play again!</button>
        </div>
      )}
    </>
  );
};

export default Board;
