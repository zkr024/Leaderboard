import storeRecords from './storeRecords.js';
import { list } from './variables.js';

const updateList = () => {
  list.innerHTML = '';
  if (storeRecords() !== undefined) {
    storeRecords().forEach((element) => {
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