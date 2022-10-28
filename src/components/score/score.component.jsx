import "./score.css";
const Score = (props) => {
  return (
    <div className="score">
      <span>X Score: {props.scores.xScore} </span>
      <span>O Score:{props.scores.oScore}</span>
      <span> {props.piece} Turn</span>
    </div>
  );
};
export default Score;
