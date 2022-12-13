const Game = require('./Game');

class App {
  play() {
    new Game().purchase();
  }
}

const app = new App();
app.play();

module.exports = App;
