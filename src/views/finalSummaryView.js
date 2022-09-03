import { quizData } from '../data.js';

export const createFinalSummaryElement = () => {
  const { finalScore, questions } = quizData;

  const element = document.createElement('div');
  element.innerHTML = `
    <h1>Congratulations ! you answered ${finalScore} from total ${questions.length} questions </h1>
    
    <marquee  Scrollamount=15 direction=left>Congratulations ! You answered ${finalScore} correct from  ${questions.length} questions!</marquee>
  `;
  return element;
};
