const QuestionsNavigation = ({
  questions,
  onSelectQuestion,
  currentQuestionIndex,
  answers,
}) => {
  let styles =
    "px-3 py-1.5 border-[1px] border-[#163960] rounded-md cursor-pointer";

  return (
    <div className="border-t-4 border-[#163960] bg-white rounded-md shadow-sm p-2 grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 gap-2 ">
      {questions.map((question) => (
        <div
          key={question.serialNum}
          onClick={() => onSelectQuestion(question.serialNum-1)}
          className={
            currentQuestionIndex + 1 === question.serialNum
              ? styles + " border-b-4 transition-colors duration-300 "
              : styles
          }
          style={
            answers.find((ans) => ans.id === question.id) && {
              backgroundColor: "#22c55e",
              color: "#ffffff",
            }
          }
        >
          {question.serialNum}
        </div>
      ))}
    </div>
  );
};

export default QuestionsNavigation;
