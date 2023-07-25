export default function FinishScreen({
  points,
  totalPoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / totalPoints) * 100;
  let emoji = "";

  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 70) emoji = "🥈";
  else if (percentage >= 50) emoji = "🥉";
  else emoji = "😞";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn"
        onClick={() => dispatch({ type: "restart" })}
        style={{ margin: "0px auto" }}
      >
        Restart Quiz
      </button>
    </>
  );
}
