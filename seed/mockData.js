export const users = [
  {
    id: 1,
    username: "test1",
    email: "john@example.com",
    passwordHash: "hashed_password",
  },
  {
    id: 2,
    username: "test2",
    email: "test2@example.com",
    passwordHash: "hashed_password",
  },
];

export const wallets = [
  {
    id: 1,
    userId: 1,
    cryptoCode: "BTC",
    fiatCode: "USD",
    cryptoBalance: 1.5,
    fiatBalance: 10000,
  },
  {
    id: 2,
    userId: 1,
    cryptoCode: "ETH",
    fiatCode: "USD",
    cryptoBalance: 1.5,
    fiatBalance: 3500,
  },
  {
    id: 3,
    userId: 2,
    cryptoCode: "ETH",
    fiatCode: "USD",
    cryptoBalance: 1.5,
    fiatBalance: 3500,
  },
];

export const orders = [];

export const transactions = [];

export const exchangeRates = [
  { cryptoCode: "BTC", fiatCode: "USD", rate: 50000 },
  { cryptoCode: "ETH", fiatCode: "USD", rate: 3500 },
  { cryptoCode: "XRP", fiatCode: "USD", rate: 1 },
  { cryptoCode: "DOGE", fiatCode: "USD", rate: 0.1 },
];
