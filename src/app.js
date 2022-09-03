'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  let storedIndex = localStorage.getItem('currentQuestionIndex');
  quizData.currentQuestionIndex = +storedIndex;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
