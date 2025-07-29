/* This function generates a random question througth the following steps:
 1. Takes the questions, number of random questions expected and the total number of quetion items
 2. It will generate an array of 20 random question ids without repetition
 3. The random question Id's generated will be used to create an array of the question objects which will be displayed for the user
 */

export default function randomQuestionGenerator(
  questions,
  numOfRandomQuestions,
  totalNumberOfQuestions
) {
  const randomQuestions = [];

  let i = 0;
  while (randomQuestions.length < 20) {
    //TODO: make length of random questions dynamic so that user can decide how many questions they want for the test
    //Generates random question ids
    const randomId = Math.ceil(Math.random() * totalNumberOfQuestions);

    // checks if question is already added to avoid duplication
    const numberExists = randomQuestions?.findIndex(
      (question) => question.id === randomId
    );

    // if number doesn't exist it adds it to the random questions ids
    if (numberExists === -1) {
      const questionItem = questions.find(
        (question) => question.id === randomId
      );
      randomQuestions.push({
        serialNum: randomQuestions.length + 1,
        ...questionItem,
      });
    }
    i++;
  }
  return randomQuestions;
}
