const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Purchase = require('./Purchase');

class Game {
  #quantity;

  constructor() {
    this.#quantity;
  }

  purchase() {
    InputView.purchaseLotto(this.handleLottoQuantity);
  }

  handleLottoQuantity = (amount) => {
    this.#quantity = new Purchase(amount).getQuantity();
    OutputView.printQuantity(this.#quantity);
  };
}

module.exports = Game;