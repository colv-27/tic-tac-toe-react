import { useState } from 'react';
import Board from './components/Board.jsx';
import StatusPanel from './components/StatusPanel.jsx';
import { getWinningCombo, isBoardFull } from './gameLogic.js';

export default function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  // figure out if someone won
  const winningCombo = getWinningCombo(board);
  let winner = null;
  if (winningCombo !== null) {
    winner = board[winningCombo[0]];
  }

  // figure out if its a tie
  let isTie = false;
  if (winner === null && isBoardFull(board)) {
    isTie = true;
  }

  // the game is over if someone won or its a tie
  let gameOver = false;
  if (winner !== null || isTie) {
    gameOver = true;
  }

  // the message at the top
  let status = '';
  if (winner !== null) {
    status = 'Player ' + winner + ' Wins!';
  } else if (isTie) {
    status = "It's a Tie!";
  } else {
    status = 'Player ' + currentPlayer + "'s Turn";
  }

  function handleCellClick(i) {
    // dont do anything if the game is over
    if (gameOver) {
      return;
    }

    // cant place on a square thats taken
    if (board[i] !== '') {
      return;
    }

    const newBoard = board.slice();
    newBoard[i] = currentPlayer;
    setBoard(newBoard);

    // switch turns
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
  }

  function resetGame() {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setCurrentPlayer('X');
  }

  return (
    <div className="container">
      <header>
        <h1>Tic-Tac-Toe</h1>
      </header>

      <StatusPanel status={status} onReset={resetGame} />

      <main className="board-container">
        <Board
          board={board}
          winningCombo={winningCombo}
          onCellClick={handleCellClick}
        />
      </main>
    </div>
  );
}
