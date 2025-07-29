/*
This funtion rates users test by comparing their answers and the real answers to the questions in the following steps:
1. The function receives user's answers and the question's real answers
2. the function will compare user answers and the true answers using the quetions id
 */

export default function testRating(questions, userAnswers) {
  let score = 0;

  for (let answer in userAnswers) {
    // finds the index of the questions
    const questionIndex = questions.findIndex(
      (question) => question.id === userAnswers[answer].id
    );

    console.log("question", questions[questionIndex].question);

    if (questionIndex !== -1) {
      if (questions[questionIndex].answer === userAnswers[answer].option) {
        score += 1;
      }
    }
  }

  return score;
}
