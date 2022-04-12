import storeRecords from './storeRecords.js';
import { list } from './variables.js';

const updateList = () => {
  list.innerHTML = '';
  const scoreData = storeRecords();
  if (scoreData !== undefined) {
    scoreData.forEach((element) => {
      list.innerHTML += `
				<li class="position">
					<div class="player">${element.name}: </div>
					<div class="result">${element.score}</div>
				</li>
			`;
    });
  }
};

export default updateList;