// all the ways you can win
export const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// checks if someone won and returns the 3 squares, or null if no one won
export function getWinningCombo(board) {
  for (let i = 0; i < winningCombos.length; i++) {
    const a = winningCombos[i][0];
    const b = winningCombos[i][1];
    const c = winningCombos[i][2];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return winningCombos[i];
    }
  }
  return null;
}

// checks if every square has something in it
export function isBoardFull(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      return false;
    }
  }
  return true;
}
