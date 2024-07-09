import { useDispatch, useSelector } from "react-redux";
import Game from "./Game";
import { RootState } from "./../state/store";
import { nextQuestion, resetAnswers } from "../state/questions/questionSlice";

// Sample questions! Can be fetched from an API
const questions = [
  {
    id: 1,
    question: "What is React primarily used for?",
    options: [
      "Building mobile apps",
      "Server-side processing",
      "Building user interfaces",
      "Data analysis",
    ],
    correctAnswer: "Building user interfaces",
  },
  {
    id: 2,
    question: "Which feature of React allows it to efficiently update the UI?",
    options: ["Virtual DOM", "Class components", "JSX", "React hooks"],
    correctAnswer: "Virtual DOM",
  },
  {
    id: 3,
    question: "JSX stands for...",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "JavaScript Syntax",
      "JavaScript X",
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    id: 4,
    question: "In JSX, how do you express JavaScript variables?",
    options: [
      "Using curly braces",
      "Using angle brackets",
      "Using quotes",
      "Using parentheses",
    ],
    correctAnswer: "Using curly braces",
  },
  {
    id: 5,
    question:
      "What is the correct syntax for embedding a JavaScript expression in JSX?",
    options: ["{js code}", "<js code>", "${js code}", "(js code)"],
    correctAnswer: "{js code}",
  },
];

export default function Body() {
  const currentQuestion = useSelector(
    (state: RootState) => state.questions.currentQuestion
  );
  const score = useSelector((state: RootState) => state.questions.score);
  const dispatch = useDispatch();

  return (
    <>
      <main className="flex bg-violet-800 w-full flex-grow">
        {currentQuestion === questions.length ? (
          <div className="flex flex-col flex-grow justify-center items-center w-full">
            <div className="text-3xl text-white font-bold">Quiz Completed!</div>
            <div className="text-xl text-white font-semibold">
              Your score is {score}
            </div>
            <button
              onClick={() => {
                dispatch(resetAnswers());
              }}
              className="px-3 py-1 bg-white rounded-lg text-lg font-bold mt-4"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="flex flex-col flex-grow justify-between items-center w-full">
            <div className="flex w-full justify-end pr-8 pt-4">
              <h1 className={"text-xl text-white"}>Score: {score}</h1>
            </div>
            {questions[currentQuestion] && (
              <Game
                questionId={questions[currentQuestion].id}
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                correctAnswer={questions[currentQuestion].correctAnswer}
              />
            )}
            <div className="flex w-full justify-end pr-8 pb-4">
              <button
                onClick={() => {
                  dispatch(nextQuestion());
                }}
                disabled={currentQuestion === questions.length}
                className={`px-3 py-1 bg-white rounded-lg text-lg font-bold ${
                  currentQuestion === questions.length ? "hidden" : "block"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
