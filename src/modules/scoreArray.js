class NewScore {
  constructor() {
    this.data = {};
  }

  addScore(name, score) {
    this.data = { name, score };
  }
}

const newScore = new NewScore();
export default newScore;