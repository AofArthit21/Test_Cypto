export default class Wallet {
  constructor(id, userId, cryptoCode, fiatCode, cryptoBalance, fiatBalance) {
    this.id = id;
    this.userId = userId;
    this.cryptoCode = cryptoCode;
    this.fiatCode = fiatCode;
    this.cryptoBalance = cryptoBalance;
    this.fiatBalance = fiatBalance;
  }
}
