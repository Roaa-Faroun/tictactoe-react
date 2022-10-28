import OnePiece from "../OnePiece/OnePiece.component";
import "./gameboard.css";
const GameBoard = (props) => {
  return (
    <div className={`gameBoard ${props.showRes !== "" ? "showRes" : ""}`}>
      {props.pieces.map((e, i) => (
        <OnePiece key={i} piece={e} index={i} update={props.update} />
      ))}
      {props.showRes !== "" ? (
        <div className="res">
          <span>{props.showRes}</span>
          <button className="btn" onClick={props.setter}>
            Restart
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default GameBoard;
