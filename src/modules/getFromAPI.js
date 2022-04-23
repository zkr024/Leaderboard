import { list } from './variables.js';
import colorBackground from './colorBackground.js';

const getFromAPI = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eGQEQDjegs1D0sJkE8LU/scores');
  const info = await response.json();
  let player = '';
  let count = 0;
  info.result.forEach((value) => {
    count += 1;
    player += `
			<li class="position ${colorBackground(count)}">
				<div class="player">${value.user}: </div>
				<div class="result">${value.score}</div>
			</li>
		`;
  });
  list.innerHTML = player;
};

export default getFromAPI;