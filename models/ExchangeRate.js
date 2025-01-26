export default class ExchangeRate {
  constructor(cryptoCode, fiatCode, rate, updatedAt) {
    this.cryptoCode = cryptoCode;
    this.fiatCode = fiatCode;
    this.rate = rate;
    this.updatedAt = updatedAt;
  }
}
