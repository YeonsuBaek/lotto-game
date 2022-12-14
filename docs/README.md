## 기능 구현 목록

- [x] 구매 금액을 입력 받는다.
  - [x] 숫자가 아닌 경우 예외 처리한다.
  - [x] 천원 단위가 아닌 경우 예외 처리한다.
  - [x] 구매 금액이 0원 이하인 경우 예외 처리한다.
- [x] 발행한 로또 수량을 출력한다.
- [x] 발행한 로또 번호를 출력한다.
- [x] 당첨 번호를 입력 받는다.
  - [x] 숫자가 아닌 경우 예외 처리한다.
  - [x] 개수가 올바르지 않은 경우 예외 처리한다.
  - [x] 숫자가 범위를 벗어난 경우 예외 처리한다.
  - [x] 중복된 숫자가 있는 경우 예외 처리한다.
- [x] 보너스 번호를 입력 받는다.
  - [x] 숫자가 아닌 경우 예외 처리한다.
  - [x] 숫자가 범위를 벗어난 경우 예외 처리한다.
  - [x] 당첨 번호와 중복된 경우 예외 처리한다.
- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교한다.
  - [x] 당첨 내역을 출력한다.
- [x] 수익률을 계산한다.
  - [x] 수익률을 출력한다.

## 기능 구현 목록 (Ver. 2)

- 로또 구입 금액을 입력한다.
  - 1000원 단위 금액을 입력할 수 있다.
  - 0원 이상 금액을 입력할 수 있다.
- 발행한 로또 수량을 출력한다.
- 로또 번호를 수량에 맞게 랜덤으로 발행한다.
  - 로또 번호는 1 이상 45 이하 숫자이다.
  - 로또 번호는 6개로 이루어져 있다.
  - 로또 번호는 중복되지 않는다.
- 랜덤으로 발행한 로또 번호를 출력한다.
- 당첨 번호를 입력한다.
  - 번호는 1 이상 45 이하 숫자이다.
  - 6개 번호를 입력한다.
  - 번호는 쉼표를 기준으로 구분한다.
  - 번호는 중복되지 않는다.
- 보너스 번호를 입력한다.
  - 번호는 1 이상 45 이하 숫자이다.
  - 당첨 번호와 중복되지 않는다.
- 로또 번호와 당첨 번호를 비교하여 당첨 내역을 구한다.
  - 6개 번호가 일치하면 1등이며, 금액은 2,000,000,000원이다.
  - 5개 번호와 보너스 번호가 일치하면 2등이며, 금액은 30,000,000원이다.
  - 5개 번호가 일치하면 3등이며, 금액은 1,500,000원이다.
  - 4개 번호가 일치하면 4등이며, 금액은 50,000원이다.
  - 3개 번호가 일치하면 5등이며, 금액은 5,000원이다.
- 당첨 내역을 출력한다.
- 총 수익률을 출력한다.
  - 수익률은 소수점 둘째 자리에서 반올림한다.
  - 수익률이 정수인 경우 소수점 첫째 자리에 0을 포함한다.
  - 세 자리마다 쉼표로 구분한다.
