import newScore from './scoreArray.js';

const storeRecords = () => {
  if (newScore.getData() !== null) {
    newScore.record = newScore.getData();
    return newScore.record;
  }
};

export default storeRecords;