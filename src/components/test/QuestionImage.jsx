const QuestionImage = ({ imageUrl }) => {
  return (
    <div className="flex justify-center py-8 ">
      <img
        src={imageUrl}
        alt="Image"
        className="min-h-[200px] max-h-[300px] min-w-[50%] max-w-[90%] "
      />
    </div>
  );
};

export default QuestionImage;
