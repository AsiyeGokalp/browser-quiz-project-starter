'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const storedIndex = localStorage.getItem('currentQuestionIndex');
  quizData.currentQuestionIndex = storedIndex ? parseInt(storedIndex, 10) : 0;

  const storedFinalScore = localStorage.getItem('finalScore');
  quizData.finalScore = storedFinalScore ? parseInt(storedFinalScore, 10) : 0;

  const answers = localStorage.getItem('selectedAnswers');
  if (!answers) {
    localStorage.setItem('selectedAnswers', JSON.stringify([]));
  }

  if (storedIndex) {
    initQuestionPage();
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
