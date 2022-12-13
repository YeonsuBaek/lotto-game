const { Random } = require('@woowacourse/mission-utils');

const LottoMaker = {
  generate(quantity) {
    const lottos = [];
    while (lottos.length < quantity) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(lotto);
    }
    return lottos;
  },
};

module.exports = LottoMaker;
