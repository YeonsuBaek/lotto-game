const Purchase = require('../../src/retry/Purchase');

describe('로또 구매 테스트', () => {
  test('구매 금액을 통해 구매 수량 구하기', () => {
    const purchase = new Purchase('3000');
    const amount = purchase.getQuantity();

    expect(amount).toBe(3);
  });
});
