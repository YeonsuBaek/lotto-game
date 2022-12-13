class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
