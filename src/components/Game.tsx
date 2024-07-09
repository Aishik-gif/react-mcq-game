import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "../state/questions/questionSlice";
import { RootState } from "./../state/store";
import check from "../assets/check.svg";

export default function Game({
  questionId,
  question,
  options,
  correctAnswer,
}: {
  questionId: number;
  question: string;
  options: string[];
  correctAnswer: string;
}) {
  const dispatch = useDispatch();

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAnswer({ questionId, answer: e.target.value, correctAnswer }));
  };

  return (
    <div className="flex flex-col w-4/5 select-none">
      <div className="text-white text-2xl pb-4">{question}</div>
      <div className="flex flex-col gap-3 text-xl text-violet-100">
        {options.map((option: string, index) => (
          <Option
            key={index}
            option={option}
            questionId={questionId}
            handleOptionChange={handleOptionChange}
          />
        ))}
      </div>
    </div>
  );
}

function Option({
  option,
  questionId,
  handleOptionChange,
}: {
  option: string;
  questionId: number;
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const selectedAnswer = useSelector(
    (state: RootState) => state.questions.answers[questionId]
  );
  return (
    <div className="flex items-center gap-2">
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          className="hidden peer"
          name={questionId.toString()}
          value={option}
          onChange={handleOptionChange}
          checked={selectedAnswer === option}
        />
        <div className="w-6 h-6 bg-white rounded flex items-center justify-center peer-checked:bg-lime-400">
          {selectedAnswer === option && (
            <img src={check} alt="checked" className="w-5 h-5" />
          )}
        </div>
        <span className="ml-2">{option}</span>
      </label>
    </div>
  );
}
