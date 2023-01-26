/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    const id = Math.round(Math.random() * 50);
    return {
      id,
      type: type,
      amount: amount,
    };
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    this.balance < amount
      ? console.log("Зняття такої суми не можливо, недостатньо коштів")
      : successWithDraw();

    function successWithDraw() {
      let { transactions, createTransaction } = account;
      account.balance -= amount;
      transactions.push(createTransaction(amount, Transaction.WITHDRAW));
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let amountByType = 0;
    for (const { type: currentType, amount } of this.transactions) {
      if (currentType === type) {
        amountByType += amount;
      }
    }
    return amountByType;
  },
};
account.deposit(300);
account.withdraw(100);
account.deposit(600);
account.withdraw(400);
console.log(account);
console.log(`Current balance : ${account.getBalance()}`);
console.log(
  "Get transaction by id ",
  account.getTransactionDetails(account.transactions[0].id)
);
console.log(
  `Sum of ${Transaction.WITHDRAW} transaction :` +
    account.getTransactionTotal(Transaction.WITHDRAW)
);
