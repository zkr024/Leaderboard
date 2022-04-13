// API id = eGQEQDjegs1D0sJkE8LU ///
import newScore from './scoreArray.js';
import getFromAPI from './getFromAPI.js';

const saveToAPI = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eGQEQDjegs1D0sJkE8LU/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: newScore.data.name,
      score: newScore.data.score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  getFromAPI();
};

export default saveToAPI;