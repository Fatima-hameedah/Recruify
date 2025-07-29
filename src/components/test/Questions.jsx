import { useState } from "react";
import QuestionItem from "./QuestionItem";
import Option from "./Option";
import Button from "../../utils/ui/Button";
import QuestionImage from "./QuestionImage";

const Questions = ({
  questions,
  setCurrentQuestion,
  currentQuestionIndex,
  onSelectOption,
  answers,
  onSubmit,
}) => {
  let currentQuestionOptions = questions[currentQuestionIndex].options;
  const questionId = questions[currentQuestionIndex].id;
  const questionNumber = questions[currentQuestionIndex].serialNum;

  function selectNextQuestionHandler() {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  }

  function selectPreviousQuestionHandler() {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  }

  return (
    <div className="border-t-4 border-[#163960] bg-white px-4 pb-2 rounded-md shadow-sm">
      <h2 className="mt-4 bg-[#163960] inline-block text-white font-semibold p-2 rounded-lg">
        Question {questionNumber}
      </h2>
      <QuestionItem item={questions[currentQuestionIndex].question} />

      {questions[currentQuestionIndex].imageUrl && (
        <QuestionImage imageUrl={questions[currentQuestionIndex].imageUrl} />
      )}

      {Object.entries(currentQuestionOptions).map(([key, value]) => (
        <Option
          key={key}
          label={key}
          text={value}
          onSelect={onSelectOption}
          questionId={questionId}
          answers={answers}
        />
      ))}

      <div className="flex justify-center gap-4 items-center p-4 mt-8">
        {currentQuestionIndex > 0 && (
          <Button type="previous" onClick={selectPreviousQuestionHandler}>
            Previous
          </Button>
        )}
        {currentQuestionIndex === questions.length - 1 && (
          <Button type="submit" onClick={onSubmit}>
            Submit
          </Button>
        )}
        {currentQuestionIndex !== questions.length - 1 && (
          <Button type="next" onClick={selectNextQuestionHandler}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Questions;
