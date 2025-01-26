import { orders, exchangeRates } from "../seed/mockData.js";

export const getOrders = (req, res) => {
  res.status(200).json(orders);
};

export const createOrder = (req, res) => {
  const { userId, cryptoCode, fiatCode, orderType, amount } = req.body;

  const exchangeRate = exchangeRates.find(
    (rate) => rate.cryptoCode === cryptoCode && rate.fiatCode === fiatCode
  );
  if (!exchangeRate) {
    return res.status(400).json({ message: "Exchange rate not found" });
  }

  const price = amount * exchangeRate.rate;
  const orderId = orders.length + 1;

  const newOrder = {
    id: orderId,
    userId,
    cryptoCode,
    fiatCode,
    orderType,
    amount,
    price,
    status: "pending",
    createdAt: new Date(),
  };

  orders.push(newOrder);
  res
    .status(201)
    .json({ message: "Order created successfully", order: newOrder });
};
