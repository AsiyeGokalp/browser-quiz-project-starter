'use strict';

import { CURRENT_QUESTION_NUM_ID } from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a progress bar element
 * @returns {Element}
 */
export const progressBar = () => {
  const element = document.createElement('div');
  const progressBar = document.createElement('div');
  progressBar.className = 'progressBarFull';
  progressBar.style.width = `${
    ((quizData.currentQuestionIndex + 1) / quizData.questions.length) * 100
  }%`;

  element.innerHTML = String.raw`
    <p class="progressBar-text">Question <span id='${CURRENT_QUESTION_NUM_ID}'>${
    quizData.currentQuestionIndex + 1
  }</span> of <span> ${quizData.questions.length}</span>
    </p>
    <div class='progressBar'>
      ${progressBar.outerHTML}
    </div>
  `;

  return element;
};
