const InputView = require('./InputView');
const Purchase = require('./Purchase');

class Game {
  purchase() {
    InputView.purchaseLotto(this.handleLottoQuantity);
  }

  handleLottoQuantity = (quantity) => {
    const amount = new Purchase(quantity).getAmount();
    console.log(amount);
  };
}

module.exports = Game;
