import { form, participant, score } from './variables.js';
import newScore from './scoreArray.js';
import updateList from './addToList.js';

const getScore = form.addEventListener('submit', (e) => {
  e.preventDefault();
  newScore.addScore(participant.value, score.value);
  newScore.save();
  updateList();
});

export default getScore;