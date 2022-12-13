const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 중 필요한 값을 입력 받는 역할을 한다.
 */
const InputView = {
  /**
   * 로또 구매 금액을 입력한다.
   */
  purchaseLotto(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', callback);
  },
  /**
   * 당첨 번호를 입력 받는다.
   */
  readWinningNumbers(callback) {
    Console.readLine('당첨 번호를 입력해 주세요.\n', callback);
  },
};

module.exports = InputView;
