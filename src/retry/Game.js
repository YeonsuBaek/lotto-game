const InputView = require('./InputView');

class Game {
  purchase() {
    InputView.purchaseLotto(this.handleLottoQuantity);
  }

  handleLottoQuantity = (quantity) => {
    console.log(quantity);
  };
}

module.exports = Game;
