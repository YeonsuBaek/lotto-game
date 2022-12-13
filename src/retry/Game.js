const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Purchase = require('./Purchase');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const LottoMaker = require('./LottoMaker');

class Game {
  #quantity;
  #lottos;
  WinningNumbers;
  BonusNumber;

  constructor() {
    this.#quantity;
    this.#lottos;
    this.WinningNumbers;
    this.BonusNumber;
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
    const winningList = numbers.split(',').map((number) => {
      return (number = parseInt(number, 10));
    });
    this.WinningNumbers = new Lotto(winningList).getWinningNumbers();
    this.askBonusNumbers();
  };

  askBonusNumbers() {
    InputView.readBonusNumbers(this.handleBonusNumber);
  }

  handleBonusNumber = (number) => {
    const bonusNumber = parseInt(number, 10);
    this.BonusNumber = new Bonus(bonusNumber, this.WinningNumbers).getBonusNumber();
  };
}

module.exports = Game;
