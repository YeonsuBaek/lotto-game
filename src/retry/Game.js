const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Purchase = require('./Purchase');
const LottoMaker = require('./LottoMaker');

class Game {
  #quantity;
  #lottos;

  constructor() {
    this.#quantity;
    this.#lottos;
  }

  purchase() {
    InputView.purchaseLotto(this.handlePurchase);
  }

  handlePurchase = (amount) => {
    this.#quantity = new Purchase(amount).getQuantity();
    OutputView.printQuantity(this.#quantity);
    this.#lottos = LottoMaker.generate(this.#quantity);
    OutputView.printLottos(this.#lottos);
  };
}

module.exports = Game;
