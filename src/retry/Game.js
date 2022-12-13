const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Purchase = require('./Purchase');
const Lotto = require('./Lotto');
const LottoMaker = require('./LottoMaker');

class Game {
  #quantity;
  #lottos;
  #WinningNumbers;

  constructor() {
    this.#quantity;
    this.#lottos;
    this.#WinningNumbers;
  }

  purchase() {
    InputView.purchaseLotto(this.handlePurchase);
  }

  handlePurchase = (amount) => {
    this.#quantity = new Purchase(amount).getQuantity();
    OutputView.printQuantity(this.#quantity);
    this.#lottos = LottoMaker.generate(this.#quantity);
    OutputView.printLottos(this.#lottos);
    this.askWinningNumbers();
  };

  askWinningNumbers() {
    InputView.readWinningNumbers(this.handleWinningNumbers);
  }

  handleWinningNumbers = (numbers) => {
    console.log(numbers);
  };
}

module.exports = Game;
