'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  const storedIndex = localStorage.getItem('currentQuestionIndex');
  quizData.currentQuestionIndex = storedIndex ? parseInt(storedIndex, 10) : 0;

  const answers = localStorage.getItem('selectedAnswers');
  if (!answers) {
    localStorage.setItem('selectedAnswers', JSON.stringify([]));
  }

  initWelcomePage();
};

window.addEventListener('load', loadApp);
