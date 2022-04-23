import { reset } from './variables.js';
import getFromAPI from './getFromAPI.js';

const refresh = reset.addEventListener('click', () => {
  window.location.reload();
  getFromAPI();
});

export default refresh;