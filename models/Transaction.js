export default class Transaction {
  constructor(
    id,
    orderId,
    senderWalletId,
    receiverWalletId,
    cryptoCode,
    fiatCode,
    cryptoAmount,
    fiatAmount,
    type,
    status
  ) {
    this.id = id;
    this.orderId = orderId;
    this.senderWalletId = senderWalletId;
    this.receiverWalletId = receiverWalletId;
    this.cryptoCode = cryptoCode;
    this.fiatCode = fiatCode;
    this.cryptoAmount = cryptoAmount;
    this.fiatAmount = fiatAmount;
    this.type = type;
    this.status = status;
  }
}
