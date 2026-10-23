function ResultScreen({ score, totalQuestions, onRestart }) {
  let message;

  if (score === totalQuestions) {
    message = "Perfect!";
  } else if (score >= 3) {
    message = "Good job!";
  } else {
    message = "Keep practising!";
  }

  return (
    <div className="result-screen">
      <h1>Quiz Completed!</h1>

      <h2>
        You scored {score} / {totalQuestions}
      </h2>

      <p>{message}</p>

      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default ResultScreen;