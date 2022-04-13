import { form, participant, score } from './variables.js';
import newScore from './scoreArray.js';
import saveToAPI from './saveToAPI.js';

const getScore = form.addEventListener('submit', (e) => {
  e.preventDefault();
  newScore.addScore(participant.value, score.value);
  saveToAPI();
  form.reset();
});

export default getScore;