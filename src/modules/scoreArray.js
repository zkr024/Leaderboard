class NewScore {
  constructor() {
    this.data = {};
    this.record = [];
  }

  addScore(name, score) {
    this.data = { name, score };
    this.record.push(this.data);
    return this.record;
  }

  save() {
    window.localStorage.setItem('scores', JSON.stringify(this.record));
  }

  getData() {
    return JSON.parse(localStorage.getItem('scores'));
  }
}

const newScore = new NewScore();
export default newScore;