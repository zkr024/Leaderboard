import storeRecords from './storeRecords.js';
import { list } from './variables.js';
import colorBackground from './colorBackground.js';

const updateList = () => {
  list.innerHTML = '';
  const scoreData = storeRecords();
  if (scoreData !== undefined) {
    let count = 0;
    scoreData.forEach((element) => {
      count += 1;
      list.innerHTML += `
				<li class="position ${colorBackground(count)}">
					<div class="player">${element.name}: </div>
					<div class="result">${element.score}</div>
				</li>
			`;
    });
  }
};

export default updateList;