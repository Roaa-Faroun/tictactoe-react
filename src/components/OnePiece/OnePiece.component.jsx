import "./OnePiece.css";
const OnePiece = (props) => {
  return (
    <div
      className={`onePiece ${
        props.piece === "X" ? "X" : props.piece === "O" ? "O" : ""
      }`}
      onClick={() => props.update(props.index)}
    >
      {props.piece}
    </div>
  );
};
export default OnePiece;
