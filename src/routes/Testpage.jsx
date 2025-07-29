import { useState } from "react";

import Questions from "../components/test/Questions";
import QuestionsNavigation from "../components/test/QuestionsNavigation";
import TestHeader from "../components/test/TestHeader";
import { tests, questions } from "../../questions";
import randomQuestionGenerator from "../contants/randomQuestionGenerator";
import Modal from "../utils/ui/Modal";
import testRating from "../contants/testRating";

const randomQuestions = randomQuestionGenerator(
  questions,
  20,
  questions.length
);

console.log(randomQuestions);

const Testpage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // a state to track the answered question
  const [answers, setAnswers] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(0);

  // This function makes sure a user can navigate to a question by click on the question number
  function selectQuestionNumberHandler(questionIndex) {
    setCurrentQuestionIndex(questionIndex);
  }

  /* 
  This function updates the answers when an option is selected in the following steps:
  1. copies the answers from the previous state
  2. Finds the index of the of the selected answer from the list of answers
  3. If the question has been answered already, it changes the details of the answer
  4. If it has not been aswered, then the answer is added into the array of answers.
  */
  function handleOptionSelect(questionId, optionPicked) {
    setAnswers((prev) => {
      const selectedAnswers = [...prev];

      const selectedAnswerIndex = selectedAnswers?.findIndex(
        (ans) => ans.id === questionId
      );

      const selectedAnswer = selectedAnswers[selectedAnswerIndex];

      if (selectedAnswer) {
        const updatedAnswer = {
          id: questionId,
          option: optionPicked,
        };
        selectedAnswers[selectedAnswerIndex] = updatedAnswer;
      } else {
        selectedAnswers.push({ id: questionId, option: optionPicked });
      }

      return selectedAnswers;
    });
    console.log("User Answers", answers);
  }

  function onSubmitTestHandler() {
    setOpenDialog(true);
  }

  function onCancelSubmitHandler() {
    setOpenDialog(false);
  }

  function onConfirmSubmit() {
    setIsSubmitted(true);
    const testScore = testRating(randomQuestions, answers);
    setTestScore(testScore);
  }

  return (
    <div className="mb-8">
      <div className=" px-8 sm:px-8 md:px-8 lg:px-40 ">
        {/* test title should be sent as a param from the login page */}
        <TestHeader title={tests[0].title} />
      </div>
      <div className=" flex flex-col-reverse md:flex-row gap-8 px-8  sm:px-8 md:px-16 lg:px-16 xl:px-40">
        <div>
          <QuestionsNavigation
            questions={randomQuestions}
            onSelectQuestion={selectQuestionNumberHandler}
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
          />
        </div>
        <div className="flex-1">
          <Questions
            questions={randomQuestions}
            setCurrentQuestion={setCurrentQuestionIndex}
            currentQuestionIndex={currentQuestionIndex}
            onSelectOption={handleOptionSelect}
            answers={answers}
            onSubmit={onSubmitTestHandler}
          />
        </div>

        <div>
          <Modal
            isOpen={openDialog}
            onCancel={onCancelSubmitHandler}
            onConfirm={onConfirmSubmit}
            isSubmitted={isSubmitted}
            testScore={testScore}
          />
        </div>
      </div>
    </div>
  );
};

export default Testpage;
