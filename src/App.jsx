import { useState } from "react";
import "./App.css";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";

const questions = [
  {
    id: 1,
    question: "Which language is used to build React applications?",
    options: ["Python", "Java", "JavaScript", "C"],
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook",
  },
  {
    id: 3,
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    id: 4,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 5,
    question: "Which symbol is used for JavaScript comments on one line?",
    options: ["##", "<!--", "//", "**"],
    answer: "//",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleAnswer(option) {
    if (option === questions[currentQuestion].answer) {
      setScore((previousScore) => previousScore + 1);
    }

    nextQuestion();
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="quiz-container">
        <ResultScreen
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
        />
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>React Quiz Application</h1>

      <p>Score: {score}</p>

      <QuestionCard
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default App;