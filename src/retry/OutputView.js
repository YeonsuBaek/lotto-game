const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 로또 구매 개수를 출력한다.
   */
  printQuantity(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  },
  /**
   * 발행된 로또 번호를 출력한다.
   */
  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(JSON.stringify(lotto).replace(/,/g, ', '));
    });
  },
};

module.exports = OutputView;
