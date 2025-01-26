export default class Order {
  constructor(
    id,
    userId,
    cryptoCode,
    fiatCode,
    orderType,
    amount,
    price,
    status
  ) {
    this.id = id;
    this.userId = userId;
    this.cryptoCode = cryptoCode;
    this.fiatCode = fiatCode;
    this.orderType = orderType;
    this.amount = amount;
    this.price = price;
    this.status = status;
  }
}
