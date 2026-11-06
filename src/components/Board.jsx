import Square from './Square.jsx';

export default function Board(props) {
  const squares = [];

  for (let i = 0; i < 9; i++) {
    let isWinning = false;
    if (props.winningCombo !== null) {
      if (props.winningCombo[0] === i || props.winningCombo[1] === i || props.winningCombo[2] === i) {
        isWinning = true;
      }
    }

    squares.push(
      <Square
        key={i}
        value={props.board[i]}
        isWinning={isWinning}
        onSquareClick={() => props.onCellClick(i)}
      />
    );
  }

  return <div className="board">{squares}</div>;
}
