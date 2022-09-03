'use strict';

import { CURRENT_QUESTION_NUM_ID } from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const progressBar = () => {
  const element = document.createElement('div');
  // const storedCurrentQuestion = localStorage.getItem("currentIndex");
  // if(!storedCurrentQuestion) return;
  //quizData.currentQuestionIndex=+storedCurrentQuestion

  element.innerHTML = String.raw`
  
  <p> Question <span id='${CURRENT_QUESTION_NUM_ID}'> ${
    quizData.currentQuestionIndex + 1
  } </span> of <span> ${quizData.questions.length} </span></p>
    <div class='progressBar' >
    <div class='progressBarFull'> </div>
    </div>
  `;

  return element;
};

export const UpdateQuestionNumber = () => {
  document.getElementById(CURRENT_QUESTION_NUM_ID).innerText =
    quizData.currentQuestionIndex;
};
