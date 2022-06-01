import { useState } from "react";

import calculateWinner from "../helpers/calculateWinner";
import Board from "./Board";
import GameInfo from "./GameInfo";

const Game = () => {
    const [history, setHistory] = useState([
        {
            squares: Array(9).fill(null),
        },
    ]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);

    const handleClick = (index) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = [...current.squares];

        const isWinner = calculateWinner(squares);
        if (squares[index] || isWinner) {
            return;
        }

        squares[index] = xIsNext ? "X" : "O";

        setHistory([
            ...newHistory,
            {
                squares,
            },
        ]);
        setStepNumber(newHistory.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => () => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    let winState = "";
    let winnerArray = [];
    let isDraw = !current.squares.some((i) => i === null);

    if (winner) {
        status = `Winner: Player ${winner.winner}`;
        winnerArray = winner.winnerArray;
        winState = "is-win";
    } else if (isDraw) {
        status = "Game over: draw";
        winState = "is-draw";
    } else {
        status = `Next Player: ${xIsNext ? "X" : "O"}`;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    winnerArray={winnerArray}
                    squares={current.squares}
                    onClick={handleClick}
                />
            </div>

            <GameInfo
                jumpTo={jumpTo}
                history={history}
                winState={winState}
                status={status}
            />
        </div>
    );
};

export default Game;
