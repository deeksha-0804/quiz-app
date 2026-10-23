function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) {
  return (
    <div className="question-card">
      <p>
        Question {questionNumber} of {totalQuestions}
      </p>

      <h2>{question.question}</h2>

      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;