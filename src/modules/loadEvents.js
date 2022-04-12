import load from './refresh.js';
import getScore from './getScore.js';
import updateList from './addToList.js';

const loadEvents = () => {
  load;
  getScore;
  updateList();
};

export default loadEvents;