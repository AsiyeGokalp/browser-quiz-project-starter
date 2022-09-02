'use strict';

import { CURRENT_QUESTION_NUM_ID } from '../constants.js';
import { currentQuestion } from '../pages/questionPage.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const progressBar= (questionCounter,maxQuestions) => {
  const element = document.createElement ('div');

  element.innerHTML = String.raw`
  
  <p> Question <span id='${CURRENT_QUESTION_NUM_ID}'> ${questionCounter} </span> of <span> ${maxQuestions} </span></p>
   <div class='progressBarFull ></div>
  `;
  
  return element;

};

export const UpdateQuestionNumber = () => {

  document.getElementById(CURRENT_QUESTION_NUM_ID).innerText = currentQuestion;
}



