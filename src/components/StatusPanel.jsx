export default function StatusPanel(props) {
  return (
    <section className="status-panel">
      <div className="status-message">{props.status}</div>
      <button className="btn" onClick={props.onReset}>Restart Game</button>
    </section>
  );
}
