const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    this.discount = value;
  },
  showOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);
  },
};

const showInfo = () => {
  const entries = Object.entries(account);

  for (const [key, value] of entries) {
    if (typeof value !== "function") {
      console.log(key, value);
    }
  }
  console.log(entries);
};
showInfo();

const test = function () {
  console.log(`Show the context in a real time - ${Date.now()}`, this);
};
test(); //undefined
test.call(account); //account
