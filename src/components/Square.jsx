export default function Square(props) {
  let className = 'cell';

  if (props.value === 'X') {
    className = className + ' x taken';
  }
  if (props.value === 'O') {
    className = className + ' o taken';
  }
  if (props.isWinning) {
    className = className + ' win';
  }

  return (
    <button className={className} onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}
